import './SignUp.css';

function SignUp() {
  return (
    <div >
      <h1 className='topic'>Sports Box</h1>
      <form className='main'>
      <h2 > Sign Up</h2>
        <input type='text' placeholder='Name' className='inpt'/>
        <p></p>
        <input type='email' placeholder='Email' className='inpt'/>
        <p></p>
        <input type='password' placeholder='Password' className='inpt'/>
        <p></p>
        <input type='password' placeholder='Confirm Password' className='inpt'/>
        <p></p>
        <p><input type='checkbox'/><span>I read and agree to</span><span><a href='#.com' className='link'> Terms & Condition</a></span></p>
        <button type='button' className='btn'>Create Account</button>
      </form>
      
    </div>
  );
}

export default SignUp;