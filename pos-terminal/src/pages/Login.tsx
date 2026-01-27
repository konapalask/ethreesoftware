import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // NOTE: Using environment variable for API URL
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
            const response = await axios.post(`${API_URL}/api/auth/login`, {
                email: email.toLowerCase(),
                password
            });

            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/pos');
            }
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-white/10 relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="p-8 pt-10">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <img
                                src="/e3logo.jpeg"
                                alt="Ethree Logo"
                                className="w-24 h-24 rounded-2xl object-contain bg-white shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-white tracking-tight mb-2">Welcome Back</h2>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">ETHREE POS</p>
                    </div>

                    {error && (
                        <div className="bg-rose-500/10 text-rose-200 p-4 rounded-xl mb-6 text-sm text-center font-medium border border-rose-500/20 backdrop-blur-md">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-900/20 disabled:opacity-50 disabled:cursor-not-allowed mt-4 active:scale-[0.98] text-lg"
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className="bg-slate-950/30 p-4 text-center text-xs text-slate-500 border-t border-white/5 font-medium tracking-wide">
                    Authorized Personnel Only • Secure System
                </div>
            </div>
        </div>
    );
}
