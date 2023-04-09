<script>
  import GithubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
  import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte'
  import MdEmail from 'svelte-icons/md/MdEmail.svelte'
  import MdPhoneAndroid from 'svelte-icons/md/MdPhoneAndroid.svelte'
</script>

<style>
  .contact{
    font-size: 14px;
  }

  .icon{
    width: 16px;
    height: 16px;
    margin-top: 3px;
  }

  .section{
    line-height: 23px;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 4px;
    justify-content: start;
  }
</style>

<div class="contact">
  <div class="section">
    <div class="icon"><MdLocationOn/></div>
    <div>Jakarta, Indonesia</div>
  </div>
  <div class="section">
    <div class="icon"><MdEmail/></div>
    <div>sidratulmm@gmail.com</div>
  </div>
  <div class="section">
    <div class="icon"><MdPhoneAndroid/></div>
    <div>+62 8999904741</div>
  </div>
  <div class="section">
    <div class="icon"><GithubIcon/></div>
    <div>@sidratul</div>
  </div>
  <div class="section">
    <div class="icon"><FaLinkedin/></div>
    <div>@msidratulm</div>
  </div>
</div>