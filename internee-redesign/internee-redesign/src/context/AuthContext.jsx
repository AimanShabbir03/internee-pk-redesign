import { createContext, useContext, useState } from 'react';

const Ctx = createContext({ user: null, login: () => {}, logout: () => {} });
const KEY = 'internee-demo-user';

/** Demo-only auth: remembers name and email in localStorage. Passwords are never stored. */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } });
  const save = (u) => { setUser(u); try { u ? localStorage.setItem(KEY, JSON.stringify(u)) : localStorage.removeItem(KEY); } catch { /* storage unavailable */ } };
  const login = (email, name) => save({ email, name: name || email.split('@')[0] });
  return <Ctx.Provider value={{ user, login, logout: () => save(null) }}>{children}</Ctx.Provider>;
}
export const useAuth = () => useContext(Ctx);
