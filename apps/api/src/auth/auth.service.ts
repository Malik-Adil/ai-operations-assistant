type User = {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
  
  const users: User[] = [];
  
  export function findUserByEmail(email: string) {
    return users.find((u) => u.email === email);
  }
  
  export function createUser(data: any) {
    const user: User = {
      id: Math.random().toString(),
      email: data.email,
      name: data.name,
      avatar: data.avatar,
    };
  
    users.push(user);
    return user;
  }