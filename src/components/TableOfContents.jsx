// 📁 src/components/TableOfContents.jsx
import React from 'react';

export default function TableOfContents() {
    return (
        <nav
            className="toc-container"
            style={{
                width: '280px',
                height: '100vh',
                position: 'sticky',
                top: 0,
                padding: '1.5rem 1.2rem',
                backgroundColor: '#1e293b',
                color: '#e0e7ff',
                boxShadow: '3px 0 10px rgba(0,0,0,0.15)',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2
                style={{
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: '2px solid #3b82f6',
                    paddingBottom: '0.5rem',
                }}
            >
                목차
            </h2>
            <ul
                style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: 0,
                    flexGrow: 1,
                    overflowY: 'auto',
                }}
            >
                {[
                    ['#image', '📦 이미지(Image)란?'],
                    ['#container', '🧱 컨테이너(Container)란?'],
                    ['#docker-commands', '🐳 Docker 명령어 정리'],
                    ['#docker-cp', '📂 도커에 파일 복사하기 (docker cp)'],
                    ['#volume-mount', '📁 도커 볼륨(Volume)과 마운트(Mount)'],
                    ['#data-persistence', '💾 데이터 퍼시스턴시(Data Persistence)란?'],
                    ['#docker-volume', '📁 도커 볼륨(Volume)'],
                    ['#bind-mount', '📂 바인드 마운트(Bind Mount)'],
                    ['#volume-vs-bind', '도커 볼륨(Volume) vs 바인드 마운트(Bind Mount) 비교'],
                    ['#storage-create', '📦 도커 스토리지 영역 생성 방법'],
                    ['#volume-commands', '📋 도커 볼륨 주요 하위 커맨드'],
                ].map(([href, text]) => (
                    <li key={href} style={{ marginBottom: '1rem' }}>
                        <a
                            href={href}
                            style={{
                                color: '#cbd5e1',
                                textDecoration: 'none',
                                fontWeight: '500',
                                fontSize: '1rem',
                                display: 'block',
                                padding: '0.3rem 0.5rem',
                                borderRadius: '6px',
                                transition: 'background-color 0.3s, color 0.3s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#3b82f6';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#cbd5e1';
                            }}
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
            <small
                style={{
                    marginTop: 'auto',
                    fontSize: '0.8rem',
                    color: '#64748b',
                    textAlign: 'center',
                    paddingTop: '1rem',
                }}
            >
                &copy; 2025 My Docker Study
            </small>
        </nav>
    );
}
