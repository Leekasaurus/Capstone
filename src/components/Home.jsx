
import Directory from './Directory';

export default function Home() {
    const categories = []
       
      
        return (
          <div>
            <header>
              <div id="home">
                <h1>Welcome to Leeks</h1>
                <Directory categories={categories} />
              </div>
            </header>
          </div>
        );
      }
    
  