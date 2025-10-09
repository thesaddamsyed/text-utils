function About(props) {
  let myStyle = {
    color : props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? 'black' : 'white'
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>1. Text Conversion</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils allows users to manipulate and transform their text with just a few clicks. Whether you need to convert text to uppercase, lowercase, or even capitalize the first letter of every word, TextUtils makes it simple. It's designed for quick and easy text formatting, perfect for professionals, students, and anyone dealing with text processing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>2. Text Analysis</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            With TextUtils, you can also analyze your text efficiently. It provides key insights like the number of words, characters, and the estimated reading time. These features help users get a clear idea of the text's structure, making it ideal for content creators, bloggers, or anyone needing word count accuracy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>3. Additional Tools</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Beyond conversions and analysis, TextUtils includes extra features like text copying and clearing for a seamless workflow. Users can clear the text with a single click or copy the processed text to use in their documents or social media posts. It’s a handy tool for boosting productivity and efficiency in text management.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
