

<script lang="ts">
  import Experience from "../components/experience.svelte";
  import SkillBar from "../components/skill.svelte";
  import Header from "../components/header.svelte";
	import { experiences } from "../datas/experiences";
	import { skills } from "../datas/skills";
	import Profile from "../components/profile.svelte";
	import Education from "../components/education.svelte";
	import Skill from "../components/skill.svelte";
	import Hobby from "../components/Hobby.svelte";
</script>
<style>
  .section{
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 4px;
    justify-content: start;
    grid-template-columns: 2fr 1fr;
  }

  .skill-group{
    margin: 10px 0;
    font-size: 15px;
  }

  .header{
    position: relative;
    color: aliceblue;
  }

  .header::before{
    content: '';
    background-color: #478bf2;
    height: 35px;
    left: -200px;
    top: -6px;
    z-index: -1;
    width: 350px;
    position: absolute;
  }

  .header.right::before{
    height: 35px;
    right: -100px;
    left: -50px;
    top: -6px;
    width: 500px;
  }

  .header.right::after{
    content: '';
    width: 0;
    height: 0;
    bottom: -38px;
    right: -100px;
    left: -50px;
    z-index: -2;
    position: absolute;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right:30px solid #3d79d1f2;
  }

  .resume{
    position: relative;
  }

  .resume::before {
		content: '';
		width: 20px;
		height: 120%;
		left: -100px;
    top: -100px;
		background-color: #478bf2;
		position: absolute;
	}
</style>

<div class="resume">
  <Header/>
  <Profile/>
  <div class="section">
    <div>
      <h3 class="header">Experience</h3>
      <div>
        {#each experiences as exp}
          <Experience exp={exp}/>
        {/each}
      </div>
    </div>

    <div>
      <h3 class="header right">Education</h3>
      <Education/>
      <h3 class="header right">Technical Skills</h3>
      <div>
        {#each skills as s}
          <h4 class="skill-group">{s.group}</h4>
          {#each s.skills as skill}
            <SkillBar skill={skill}/>
          {/each}
        {/each}
      </div>

      <br>
      <h3 class="header right">Hobby</h3>
      <Hobby/>
    </div>
  </div>
</div>