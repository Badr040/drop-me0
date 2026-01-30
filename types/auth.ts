export interface LoginDTO {
  email: string;
  password: string;
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
}

/**
 * Response اللي راجع من الـ backend
 * عدل الاسم لو الـ API عندك مختلف
 */
export interface AuthResponse {
  token: string;
}
