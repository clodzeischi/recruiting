import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ReferencePage from "./pages/reference/ReferencePage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import WelcomePage from "./pages/public/WelcomePage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import DashboardPage from "./pages/applicant/DashboardPage.tsx";
import ApplyPage from "./pages/applicant/ApplyPage.tsx";
import InterviewPage from "./pages/admin/InterviewPage.tsx";
import CandidateDetailPage from "./pages/admin/CandidateDetailPage.tsx";
import CandidatesPage from "./pages/admin/CandidatesPage.tsx";
import PostingNewPage from "./pages/admin/PostingNewPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path='/' element={<WelcomePage />} />
                <Route path='/login' element={<LoginPage />} />

                {/* Applicant */}
                <Route path='/applicant/dashboard' element={
                    <ProtectedRoute role='APPLICANT'>
                        <DashboardPage />
                    </ProtectedRoute>
                } />
                <Route path='/applicant/apply' element={
                    <ProtectedRoute role='APPLICANT'>
                        <ApplyPage />
                    </ProtectedRoute>
                } />

                {/* Admin */}
                <Route path='/admin/dashboard' element={
                    <ProtectedRoute role='ADMIN'>
                        <ApplyPage />
                    </ProtectedRoute>
                } />
                <Route path='/admin/new' element={
                    <ProtectedRoute role='ADMIN'>
                        <PostingNewPage />
                    </ProtectedRoute>
                } />
                <Route path='/admin/candidates' element={
                    <ProtectedRoute role='ADMIN'>
                        <CandidatesPage />
                    </ProtectedRoute>
                } />
                <Route path='/admin/candidates/:id' element={
                    <ProtectedRoute role='ADMIN'>
                        <CandidateDetailPage />
                    </ProtectedRoute>
                } />
                <Route path='/admin/interviews/:id' element={
                    <ProtectedRoute role='ADMIN'>
                        <InterviewPage />
                    </ProtectedRoute>
                } />


                {/* Reference */}
                <Route path="/reference/:token" element={
                    <ProtectedRoute role='REFERENCE'>
                        <ReferencePage/>
                    </ProtectedRoute>
                } />

                {/* Fallback */}
                <Route path='*' element={<Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App