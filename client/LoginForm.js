class LoginForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
      
        axios.post('/login', data)
          .then((response) => {
            // Process the response from the server
          })
          .catch((error) => {
            // Handle any errors
          });
      }
      
  }