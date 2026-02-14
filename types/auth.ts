export interface LoginDTO {
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface SignUpDTO {
  fName: string;
  lName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  dateOfBirth: string;
  gender: "male" | "female";
  role: "admin" | "user";
}

export interface AuthResponse {
  token: string;
  role: "user" | "admin";
}
