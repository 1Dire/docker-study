// 📁 src/components/TableOfContents.jsx
import React from 'react';

export default function TableOfContents({ isOpen, onClose }) {
    return (
        <nav
            className={`toc-container ${isOpen ? 'open' : ''}`}
            onClick={onClose}
            role="navigation"
            aria-label="Table of Contents"
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
                    ["dockerfile-instructions","📝 Dockerfile 주요 인스트럭션"],
                    ["docker-compose","🛠️ 도커 컴포즈(Docker Compose)란?"],
                    ["docker-run-down","🚀 도커 컨테이너 실행과 중지"],
                    ["what-is-kubernetes","☸️ 쿠버네티스(Kubernetes)란?"]
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
