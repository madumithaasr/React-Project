import './SignIn.css';

function SignIn() {
  return (
    <div >
      <h1 className='topic'>Sports Box</h1>
      <form className='Main'>
      <h2 > Log In</h2>
        <input type='email' placeholder='Email' className='inpt'/>
        <p></p>
        <input type='password' placeholder='Password' className='inpt'/>
        <p></p>
        <button type='button' className='btn'>Log In</button>
        <p>Don't have an Account?<a href='#'>Sign Up</a></p>
      </form>
      
    </div>
  );
}

export default SignIn;