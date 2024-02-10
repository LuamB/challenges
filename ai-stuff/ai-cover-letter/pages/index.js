import {useState} from 'react';

const Home = () => {
  

  const [apiOutput, setApiOutput] = useState('')

  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async (userInfo, companyInfo) => {
    setApiOutput('AI is generating your cover letter...');

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInfo, companyInfo }),
    });
  
    const data = await response.json();
    console.log(data)
    const { output } = data;
    console.log("OpenAI replied...", output)
  
    setApiOutput(`${output}`);
    setIsGenerating(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const userInfo = formElements.userInfo.value;
    const companyInfo = formElements.companyInfo.value;
    callGenerateEndpoint(userInfo, companyInfo);
  }


  return (
    <div className="root">
      <section className="container input-box">
        <div>
          <h1>Cover Letter Generator</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userInfo">Enter a few words about yourself</label>
            </div>
            <textarea id="userInfo" name="userInfo" rows="10"/> 
            <div>
              <label htmlFor="companyInfo">Enter the job description</label>
            </div>
            <textarea id="companyInfo" name="companyInfo" rows="10"/> 
            <div>
              <button className="generate-button"type="submit">Generate</button>
              <button onClick={() => document.querySelector('form').reset()}>Reset</button>
            </div>
          </form>
        </div>
      </section>
      <section className="container">
        <h1>Access your personal cover letter below</h1>
        <p>
          {apiOutput}
        </p>
      </section>
    </div>
  );
};

export default Home;
