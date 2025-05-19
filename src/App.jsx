// 📁 src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableOfContents from './components/TableOfContents';
import Content from './components/Content';

export default function App() {
    return (
        <div
            className="min-vh-100 d-flex"
            style={{ backgroundColor: '#a8dadc', padding: '2rem' }}
        >
            <TableOfContents />
            <Content />
        </div>
    );
}
