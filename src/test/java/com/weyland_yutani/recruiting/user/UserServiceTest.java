package com.weyland_yutani.recruiting.user;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserDetailsServiceImpl userDetailsService;

    private User mockUser = new User(
            1L,
            "soldier_a",
            "supersecrethash",
            ERole.ROLE_ADMIN
    );

    @Test
    void whenFindsUser_thenReturnsCorrectAuthority() {
        when(userRepository.findByUsername(anyString())).thenReturn(Optional.of(mockUser));

        UserDetails result = userDetailsService.loadUserByUsername("soldier_a");

        assertThat(result.getUsername())
                .isEqualTo("soldier_a");

        assertThat(result.getAuthorities())
                .extracting("authority")
                .containsExactly(ERole.ROLE_ADMIN.name());
    }

    @Test
    void whenUnableToFindUser_thenThrows() {
        when(userRepository.findByUsername(anyString())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> userDetailsService.loadUserByUsername("soldier_b"))
                .isInstanceOf(UsernameNotFoundException.class)
                .hasMessageContaining("Username not found");
    }
}
