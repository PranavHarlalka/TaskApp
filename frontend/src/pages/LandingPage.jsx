import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Organize Your Life with
                        <span className="hero-title-highlight"> Task Manager</span>
                    </h1>
                    <p className="hero-description">
                        Stay productive and never miss a deadline. Manage your tasks efficiently 
                        with our intuitive and powerful task management system.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn btn-primary">
                            Get Started Free
                        </Link>
                        <Link to="/login" className="btn btn-secondary">
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-card card-1">
                        <div className="card-header">
                            <div className="card-icon">✓</div>
                            <span>Task Completed</span>
                        </div>
                        <p className="card-text">Project Presentation</p>
                    </div>
                    <div className="floating-card card-2">
                        <div className="card-header">
                            <div className="card-icon">⏰</div>
                            <span>Due Today</span>
                        </div>
                        <p className="card-text">Team Meeting</p>
                    </div>
                    <div className="floating-card card-3">
                        <div className="card-header">
                            <div className="card-icon">📋</div>
                            <span>In Progress</span>
                        </div>
                        <p className="card-text">Code Review</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Task Manager?</h2>
                <p className="section-subtitle">
                    Everything you need to stay organized and productive
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h3 className="feature-title">Easy Task Creation</h3>
                        <p className="feature-description">
                            Create and organize tasks in seconds with our intuitive interface
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3 className="feature-title">Set Priorities</h3>
                        <p className="feature-description">
                            Prioritize your tasks and focus on what matters most
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📅</div>
                        <h3 className="feature-title">Track Deadlines</h3>
                        <p className="feature-description">
                            Never miss a deadline with smart reminders and notifications
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3 className="feature-title">Progress Tracking</h3>
                        <p className="feature-description">
                            Monitor your productivity and see your accomplishments
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Secure & Private</h3>
                        <p className="feature-description">
                            Your data is encrypted and protected with enterprise-level security
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3 className="feature-title">Lightning Fast</h3>
                        <p className="feature-description">
                            Built with modern technology for optimal performance
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <h3 className="stat-number">10K+</h3>
                        <p className="stat-label">Active Users</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">500K+</h3>
                        <p className="stat-label">Tasks Completed</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">99.9%</h3>
                        <p className="stat-label">Uptime</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">4.8★</h3>
                        <p className="stat-label">User Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2 className="cta-title">Ready to Get Started?</h2>
                <p className="cta-description">
                    Join thousands of users who are already managing their tasks efficiently
                </p>
                <Link to="/register" className="btn btn-cta">
                    Create Free Account
                </Link>
            </section>
        </div>
    );
};

export default LandingPage;
