
import './App.css';
import CoursePage from './CoursePage';
import CoursePage1 from './CoursePage1';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';
import UserList from './UserList';
import UserProvider from './UserProvider';

function App() {
  return (
    <div>
      {/* <CoursePage/> */}
      {/* <CoursePage1/> */}
      {/* <ThemeProvider>
        <h2>Functional component - useContext hook</h2>
        <ThemedButton/>
      </ThemeProvider> */}
      <UserProvider>
        <UserList/>
      </UserProvider>
    </div>
  );
}

export default App;
