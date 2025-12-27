import React, { useState, useEffect } from 'react';
import { Search, LogOut } from 'lucide-react';

const Overlay = ({ onSearch, isLoading }) => {
    const [token, setToken] = useState(localStorage.getItem('github_token') || '');
    const [username, setUsername] = useState(localStorage.getItem('github_username') || '');
    const [isAuthLoading, setIsAuthLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (code) {
            setIsAuthLoading(true);
            fetch('/api/github-auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.access_token) {
                        setToken(data.access_token);
                        localStorage.setItem('github_token', data.access_token);
                        if (data.login) {
                            setUsername(data.login);
                            localStorage.setItem('github_username', data.login);
                        }
                        window.history.replaceState({}, document.title, window.location.pathname);
                        // Trigger initial search automatically after login
                        if (onSearch && data.login) {
                            onSearch(data.login, data.access_token);
                        }
                    } else {
                        console.error('Auth failed:', data);
                    }
                })
                .catch(err => console.error('Auth error:', err))
                .finally(() => setIsAuthLoading(false));
        }
    }, [onSearch]);

    const handleLogin = () => {
        const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
        if (!clientId) {
            alert('Missing VITE_GITHUB_CLIENT_ID in .env');
            return;
        }
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user`;
    };

    const handleSync = () => {
        if (onSearch && username) {
            onSearch(username, token);
        }
    };

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('github_token');
        localStorage.removeItem('github_username');
    };

    const styles = {
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 100,
            fontFamily: 'system-ui, -apple-system, sans-serif'
        },
        header: {
            position: 'absolute',
            top: '24px',
            left: '24px',
            pointerEvents: 'auto'
        },
        title: {
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '2px',
            textShadow: '0 0 10px rgba(255, 64, 129, 0.5)'
        },
        actionsContainer: {
            position: 'absolute',
            top: '24px',
            right: '24px',
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        authBtn: {
            background: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        },
        syncBtn: {
            background: 'linear-gradient(45deg, #ff4081, #7c4dff)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 15px rgba(255, 64, 129, 0.3)'
        },
        profile: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '6px 12px 6px 6px'
        },
        avatar: {
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            border: '1.5px solid #ff4081'
        },
        usernameText: {
            color: 'white',
            fontSize: '13px',
            fontWeight: 'bold'
        },
        logoutIcon: {
            color: '#888',
            cursor: 'pointer',
            marginLeft: '4px'
        },
        loadingOverlay: {
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(10px)',
            padding: '12px 24px',
            borderRadius: '30px',
            border: '1px solid rgba(255, 64, 129, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'white',
            fontSize: '13px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            pointerEvents: 'auto'
        }
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <h1 style={styles.title}>CommitCampfire</h1>
            </div>

            {/* Top Right Actions */}
            <div style={styles.actionsContainer}>
                {!token ? (
                    <button
                        style={{ ...styles.authBtn, opacity: isAuthLoading ? 0.7 : 1 }}
                        onClick={handleLogin}
                        disabled={isAuthLoading}
                    >
                        {isAuthLoading ? (
                            'Connecting...'
                        ) : (
                            <>
                                <img src="/github-mark.svg" style={{ width: 18, height: 18 }} alt="GitHub" />
                                Login with GitHub
                            </>
                        )}
                    </button>
                ) : (
                    <>
                        <div style={styles.profile}>
                            <img
                                src={`https://github.com/${username}.png`}
                                style={styles.avatar}
                                alt="avatar"
                            />
                            <span style={styles.usernameText}>{username}</span>
                            <LogOut
                                size={14}
                                style={styles.logoutIcon}
                                onClick={handleLogout}
                                className="hover-white"
                            />
                        </div>
                        <button
                            style={{ ...styles.syncBtn, opacity: isLoading ? 0.7 : 1 }}
                            onClick={handleSync}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                'Scanning...'
                            ) : (
                                <>
                                    <Search size={18} />
                                    Sync
                                </>
                            )}
                        </button>
                    </>
                )}
            </div>

            {/* Loading Indicator */}
            {isLoading && (
                <div style={styles.loadingOverlay}>
                    <div className="pulse-dot" />
                    Initializing Uplink...
                </div>
            )}

            <style>{`
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #ff4081;
                    border-radius: 50%;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
                .hover-white:hover { color: white !important; }
            `}</style>
        </div>
    );
};

export default Overlay;
