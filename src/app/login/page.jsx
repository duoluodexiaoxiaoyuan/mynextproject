'use client'
import { useState } from 'react';

export default function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 提交登录逻辑
  }

  return (
    <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <input 
        className="w-full border p-2 mb-2"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="用户名"
      />

      <input
        className="w-full border p-2 mb-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密码"  
      />

      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded"
        type="submit">
        登录
      </button>
    </form>
  )
}