
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    accepts_cookies BOOLEAN DEFAULT false NOT NULL,
    accepts_analytics BOOLEAN DEFAULT false NOT NULL,
    accepts_policy BOOLEAN DEFAULT false NOT NULL,
    operating_system VARCHAR(63),
    browser VARCHAR(63),
    country VARCHAR(63),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE user_sessions (
    user_session_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE page_visits (
    page_visit_id SERIAL PRIMARY KEY,
    user_session_id INT NOT NULL,
    page_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (user_session_id) REFERENCES user_sessions(user_session_id) ON DELETE CASCADE
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE
);
