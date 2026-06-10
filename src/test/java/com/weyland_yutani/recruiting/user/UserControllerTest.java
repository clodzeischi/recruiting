package com.weyland_yutani.recruiting.user;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.web.servlet.MockMvc;

public class UserControllerTest {

    @Mock
    private UserRepository userRepository;

    private MockMvc mockMvc;

    @InjectMocks
    private UserController userController;


}
