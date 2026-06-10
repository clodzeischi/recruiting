import {useAuth} from "../hooks/useAuth.ts";
import {Navigate} from "react-router-dom";


interface Props {
    role: string,
    children: React.ReactNode
}

function ProtectedRoute({ role, children}: Props) {
    const { isAuthenticated, role: userRole } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to='/login'/>
    }

    if (userRole !== role) {
        return <Navigate to='/'/>
    }

    return <>{children}</>
}

export default ProtectedRoute