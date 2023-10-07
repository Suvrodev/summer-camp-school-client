import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Pages/Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='max-w-7xl mx-auto'>
     
        <HelmetProvider>
             <AuthProvider>
                <React.StrictMode>
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={router} />
                    </QueryClientProvider>
                </React.StrictMode>
            </AuthProvider>
        </HelmetProvider>
            
       
       
    </div>
)
