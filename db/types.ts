// Type for 'users' table
export type T_User = {
  user_id: number;
  accepts_cookies: boolean;
  accepts_analytics: boolean;
  accepts_policy: boolean;
  operating_system?: string;
  browser?: string;
  country?: string;
  created_at: Date;
};

export type T_CreateUser = Omit<T_User, "user_id" | "created_at">;

// Type for 'user_sessions' table
export type T_UserSession = {
  user_session_id: number;
  user_id: number;
  created_at: Date;
};

export type T_CreateSession = Omit<
  T_UserSession,
  "user_session_id" | "created_at"
>;

// Type for 'page_visits' table
export type T_PageVisit = {
  page_visit_id: number;
  user_session_id: number;
  page_name: string;
  created_at: Date;
};

export type T_CreateVisit = Omit<T_PageVisit, "page_visit_id" | "created_at">;

// Type for 'messages' table
export type T_Message = {
  message_id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
  user_id?: number;
  created_at: Date;
};

export type T_CreateMessage = Omit<T_Message, "message_id" | "created_at">;
