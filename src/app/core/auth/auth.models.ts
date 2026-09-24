export interface User {
  id: string;
  fullName: string;
  phoneNumber?: string;
  email?: string | null;
  status?: string;
  phoneNumberVerified?: boolean;
  emailVerified?: boolean;
  role?: string;
}

export interface TokenResponse {
  accessToken: string;
  accessTokenExpiresAt?: number;
  refreshToken: string;
  refreshTokenExpiresAt?: number;
}

export interface AuthResponse {
  user: User;
  tokens: TokenResponse;
  token?: TokenResponse | string;
}

export interface LoginRequest {
  login?: string;
  emailOrPhone?: string;
  password: string;
  deviceName?: string | null;
}

export interface RegisterRequest {
  fullName: string;
  phoneNumber: string;
  email?: string | null;
  password: string;
  deviceName?: string | null;
}
