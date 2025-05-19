// 📁 src/App.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableOfContents from './components/TableOfContents';
import Content from './components/Content';

export default function App() {
    const [tocOpen, setTocOpen] = useState(false);

    const toggleToc = () => setTocOpen(prev => !prev);

    return (
        <div className="app-container">
            {/* 모바일에서만 보이는 토글 버튼 */}
            <button className="toggle-button" onClick={toggleToc}>
                {tocOpen ? '목차 닫기' : '목차 열기'}
            </button>

            <TableOfContents isOpen={tocOpen} onClose={() => setTocOpen(false)} />

            {/* 클릭 시 모바일에서 목차 닫기 */}
            <Content onClick={() => tocOpen && setTocOpen(false)} />
        </div>
    );
}
