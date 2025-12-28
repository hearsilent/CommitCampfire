import { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';

const Overlay = ({ onSearch, isLoading, processedCount, totalCount }) => {
    const [token, setToken] = useState(localStorage.getItem('github_token') || '');
    const [username, setUsername] = useState(localStorage.getItem('github_username') || '');
    const [isAuthLoading, setIsAuthLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (code) {
            const url = import.meta.env.VITE_SUPABASE_URL;
            if (!url) {
                alert('Missing VITE_SUPABASE_URL in .env');
                return;
            }
            setIsAuthLoading(true);
            fetch(url, {
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

    return (
        <div className="overlay-container">
            {/* Top Bar */}
            <div className="overlay-top-bar">
                <div className="overlay-header">
                    <h1 className="overlay-title">CommitCampfire</h1>
                </div>

                <div className="overlay-actions">
                    {!token ? (
                        <button
                            className="overlay-auth-btn"
                            style={{ opacity: isAuthLoading ? 0.7 : 1 }}
                            onClick={handleLogin}
                            disabled={isAuthLoading}
                        >
                            {isAuthLoading ? (
                                'Connecting...'
                            ) : (
                                <>
                                    <img src={`${import.meta.env.BASE_URL}github-mark.svg`} style={{ width: 18, height: 18 }} alt="GitHub" />
                                    <span>Login with GitHub</span>
                                </>
                            )}
                        </button>
                    ) : (
                        <>
                            <div className="overlay-profile">
                                <img
                                    src={`https://github.com/${username}.png`}
                                    className="overlay-avatar"
                                    alt="avatar"
                                />
                                <span className="overlay-username">{username}</span>
                                <LogOut
                                    size={14}
                                    className="overlay-logout hover-white"
                                    onClick={handleLogout}
                                />
                            </div>
                            <button
                                className="overlay-sync-btn"
                                style={{ opacity: isLoading ? 0.7 : 1 }}
                                onClick={handleSync}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    'Syncing...'
                                ) : (
                                    'Sync'
                                )}
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Loading Indicator */}
            {isLoading && (
                <div className="overlay-loading">
                    <div className="pulse-dot" />
                    Kindling Fire {totalCount > 0 ? `(${processedCount}/${totalCount})` : ''}...
                </div>
            )}

            {/* Footer */}
            <a
                href="https://github.com/HearSilent"
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-footer hover-white"
            >
                <img
                    src="https://github.com/HearSilent.png"
                    className="overlay-footer-avatar"
                    alt="HearSilent"
                />
                Built by @HearSilent
            </a>

            <style>{`
                .overlay-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 100;
                    font-family: system-ui, -apple-system, sans-serif;
                }

                .overlay-top-bar {
                    position: absolute;
                    top: calc(21px + env(safe-area-inset-top));
                    left: 24px;
                    right: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    pointer-events: none;
                }

                .overlay-header {
                    pointer-events: auto;
                }

                .overlay-title {
                    margin: 0;
                    font-size: 30px;
                    font-weight: bold;
                    color: #ff5c00;
                    font-family: 'Malvides', sans-serif;
                    letter-spacing: 2px;
                    text-shadow: 0 0 10px rgba(255, 64, 129, 0.5);
                    line-height: 1;
                    transform: translateY(4px);
                }

                .overlay-actions {
                    pointer-events: auto;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .overlay-auth-btn {
                    background: white;
                    color: black;
                    border: none;
                    border-radius: 12px;
                    padding: 10px 20px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }

                .overlay-sync-btn {
                    background: linear-gradient(45deg, #1b4721, #46954a);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    padding: 10px 20px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 15px rgba(35, 134, 54, 0.3);
                }

                .overlay-profile {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 6px 12px 6px 6px;
                }

                .overlay-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    border: 1.5px solid #238636;
                }

                .overlay-username {
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                }

                .overlay-logout {
                    color: #888;
                    cursor: pointer;
                    margin-left: 4px;
                }

                .overlay-loading {
                    position: absolute;
                    bottom: calc(40px + env(safe-area-inset-bottom));
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.7);
                    backdrop-filter: blur(10px);
                    padding: 12px 24px;
                    border-radius: 30px;
                    border: 1px solid rgba(229, 83, 75, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    pointer-events: auto;
                    white-space: nowrap;
                }

                .overlay-footer {
                    position: absolute;
                    bottom: calc(24px + env(safe-area-inset-bottom));
                    right: 24px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    font-weight: 500;
                    pointer-events: auto;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .overlay-footer-avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #e5534b;
                    border-radius: 50%;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
                .hover-white:hover { color: white !important; }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .overlay-top-bar {
                        top: calc(16px + env(safe-area-inset-top));
                        left: 16px;
                        right: 16px;
                        flex-direction: row; /* Force row layout */
                        align-items: center;
                        gap: 12px;
                    }

                    .overlay-title {
                        font-size: 20px; /* Reduce size to fit on one line */
                        white-space: nowrap;
                    }

                    .overlay-actions {
                        width: auto; /* Allow it to shrink/grow as needed, don't force full width */
                        justify-content: flex-end;
                        flex-shrink: 0; /* Prevent buttons from squishing effectively, but title shrinks first */
                    }

                    .overlay-auth-btn {
                        padding: 8px 12px; /* Smaller padding on mobile */
                        font-size: 13px;
                    }

                    .overlay-auth-btn span {
                        display: none; /* Hide text on mobile to save space */
                    }

                    .overlay-username {
                        display: none; /* Hide username on mobile to save space */
                    }
                    
                    .overlay-loading {
                        bottom: calc(100px + env(safe-area-inset-bottom));
                        width: auto; /* Auto width based on content */
                        min-width: 200px; /* Min width for stability */
                        justify-content: center;
                        font-size: 12px;
                    }

                    .overlay-footer {
                        bottom: calc(60px + env(safe-area-inset-bottom)); /* Significantly more clearance */
                        right: auto; /* Reset right positioning */
                        left: 50%; /* Center horizontally */
                        transform: translateX(-50%);
                        width: auto;
                        justify-content: center;
                        white-space: nowrap;
                    }
                }
            `}</style>
        </div>
    );
};

export default Overlay;
