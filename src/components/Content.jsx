import React from 'react';

export default function Content() {
    return (
        <main
            className="flex-grow-1 bg-white rounded shadow p-4"
            style={{ maxWidth: '900px', marginLeft: '2rem', overflowY: 'auto', maxHeight: '100vh' }}
        >
            <section id="image" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📦 이미지(Image)란?</h2>
                <p>
                    도커 이미지란 컨테이너를 실행하기 위한 모든 파일, 환경 설정, 실행 정보 등을 포함한 불변의 템플릿이다.
                    <br />
                    보통 하나의 이미지로 여러 개의 컨테이너를 만들 수 있다.
                </p>
            </section>

            <section id="container" className="mb-5">
                <h2 className="h5 fw-bold mb-3">🧱 컨테이너(Container)란?</h2>
                <p>
                    컨테이너는 이미지를 기반으로 실행된 독립된 환경이다.
                    <br />
                    가상 머신과 달리, 호스트 시스템 커널을 공유하여 빠르고 가볍다.
                </p>
            </section>

            <section id="docker-commands" className="mb-5">
                <h1 className="h4 fw-bold mb-4">🐳 Docker 명령어 정리</h1>
                <table className="table table-bordered table-striped table-responsive">
                    <thead className="table-light">
                    <tr>
                        <th style={{ width: '40%' }}>명령어</th>
                        <th>설명</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>docker build -t myapp .</code></td>
                        <td>도커 이미지 생성</td>
                    </tr>
                    <tr>
                        <td><code>docker images</code></td>
                        <td>이미지 목록 확인</td>
                    </tr>
                    <tr>
                        <td><code>docker run -p 3000:3000 myapp</code></td>
                        <td>컨테이너 실행 (포트 매핑)</td>
                    </tr>
                    <tr>
                        <td><code>docker ps</code></td>
                        <td>실행 중인 컨테이너 확인</td>
                    </tr>
                    <tr>
                        <td><code>docker stop [컨테이너ID]</code></td>
                        <td>컨테이너 중지</td>
                    </tr>
                    <tr>
                        <td><code>docker rm [컨테이너ID]</code></td>
                        <td>컨테이너 삭제</td>
                    </tr>
                    <tr>
                        <td><code>docker rmi [이미지ID]</code></td>
                        <td>이미지 삭제</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* 나머지 섹션들도 동일하게... */}
            <section id="docker-cp" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📂 도커에 파일 복사하기 (docker cp)</h2>
                <p>
                    <code>docker cp [호스트_파일_경로] [컨테이너ID]:[컨테이너_경로]</code> 명령어를 사용하면<br />
                    로컬 컴퓨터의 파일이나 디렉터리를 컨테이너 내부로 복사할 수 있습니다.<br />
                    예) <code>docker cp ./app/config.json mycontainer:/usr/src/app/config.json</code>
                </p>
            </section>

            <section id="volume-mount" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📁 도커 볼륨(Volume)과 마운트(Mount)</h2>
                <p>
                    도커 볼륨은 컨테이너와 독립적으로 데이터를 저장하는 방법입니다.<br />
                    볼륨을 사용하면 컨테이너가 삭제되어도 데이터는 유지됩니다.<br />
                    마운트는 호스트의 특정 디렉터리를 컨테이너에 연결해 실시간으로 파일을 공유하는 방식입니다.<br />
                    예) <code>docker run -v /host/path:/container/path myapp</code>
                </p>
            </section>

            <section id="data-persistence" className="mb-5">
                <h2 className="h5 fw-bold mb-3">💾 데이터 퍼시스턴시(Data Persistence)란?</h2>
                <p>
                    데이터 퍼시스턴시는 애플리케이션이나 컨테이너가 종료되어도 데이터가 사라지지 않고 유지되는 상태를 말합니다.<br />
                    도커에서는 볼륨이나 마운트를 사용해 컨테이너 외부에 데이터를 저장하여 중요한 정보를 보호합니다.
                </p>
            </section>

            <section id="docker-volume" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📁 도커 볼륨(Volume)</h2>
                <p>
                    도커 볼륨은 도커가 관리하는 독립된 저장 공간으로, 컨테이너와 완전히 분리되어 데이터를 안전하게 보관합니다.<br />
                    컨테이너가 삭제되어도 데이터가 유지됩니다.
                </p>
            </section>

            <section id="bind-mount" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📂 바인드 마운트(Bind Mount)</h2>
                <p>
                    바인드 마운트는 호스트 시스템의 특정 디렉터리를 컨테이너에 직접 연결하는 방식입니다.<br />
                    호스트와 실시간으로 파일을 공유하지만, 호스트의 변화에 영향을 받습니다.
                </p>
            </section>

            <section id="volume-vs-bind" className="mb-5">
                <h2 className="h5 fw-bold mb-3">도커 볼륨(Volume) vs 바인드 마운트(Bind Mount) 비교</h2>
                <table className="table table-bordered table-striped table-responsive"
                       style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <thead className="table-light">
                    <tr>
                        <th>구분</th>
                        <th>도커 볼륨(Volume)</th>
                        <th>바인드 마운트(Bind Mount)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>스토리지 영역</td>
                        <td>도커가 관리하는 전용 스토리지 영역</td>
                        <td>호스트 시스템의 실제 디렉터리</td>
                    </tr>
                    <tr>
                        <td>물리적 위치</td>
                        <td>도커 내부 지정 위치, 직접 접근 제한</td>
                        <td>사용자가 지정한 호스트 경로 그대로 사용</td>
                    </tr>
                    <tr>
                        <td>마운트 절차</td>
                        <td><code>-v volumeName:/container/path</code></td>
                        <td><code>-v /host/path:/container/path</code></td>
                    </tr>
                    <tr>
                        <td>내용 편집</td>
                        <td>컨테이너 내에서 편집 가능, 안전하게 저장</td>
                        <td>호스트와 컨테이너 양쪽에서 실시간 편집 가능</td>
                    </tr>
                    <tr>
                        <td>백업 및 관리</td>
                        <td>도커 명령어로 쉽게 백업, 복원, 이동 가능</td>
                        <td>호스트 파일 시스템에 의존, 직접 관리 필요</td>
                    </tr>
                    <tr>
                        <td>중점</td>
                        <td>데이터 영속성과 안전한 백업</td>
                        <td>실시간 데이터 공유 및 개발 환경 동기화</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section id="storage-create" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📦 도커 스토리지 영역 생성 방법</h2>
                <p>
                    도커에서 스토리지 영역(볼륨)을 생성하려면 다음 명령어를 사용합니다.<br />
                    <code>docker volume create [볼륨이름]</code><br />
                    이렇게 생성된 볼륨은 컨테이너에 마운트하여 데이터를 저장할 수 있습니다.<br />
                    예) <code>docker run -v myvolume:/app/data myapp</code>
                </p>
                <p>
                    볼륨은 도커가 관리하는 독립적인 저장 공간으로, 컨테이너가 삭제되어도 데이터는 유지됩니다.<br />
                    따라서 데이터 백업과 복원이 쉽고, 여러 컨테이너 간 데이터 공유도 가능합니다.
                </p>
            </section>

            <section id="volume-commands" className="mb-5">
                <h2 className="h5 fw-bold mb-3">📋 도커 볼륨 주요 하위 커맨드</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-light">
                    <tr>
                        <th>커맨드</th>
                        <th>설명</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>create</code></td>
                        <td>볼륨 생성</td>
                    </tr>
                    <tr>
                        <td><code>inspect</code></td>
                        <td>볼륨 상세 정보 확인</td>
                    </tr>
                    <tr>
                        <td><code>ls</code></td>
                        <td>볼륨 목록 출력</td>
                    </tr>
                    <tr>
                        <td><code>rm</code></td>
                        <td>볼륨 삭제</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}
