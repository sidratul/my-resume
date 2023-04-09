<script lang="ts">
  import type {Skill} from '../datas/skills';
  export let skill: Skill;
</script>

<style>
  .skill{
    display: inline-block;
    padding: 4px;
    margin: 2px;
    color: #5d6065;
    box-shadow: 2px 2px 6px 0px #d2d2d5;
    border-radius: 3px;
    font-size: 12px;
    -webkit-print-color-adjust:exact;
    -webkit-filter:opacity(1);
  }
</style>

<div class="skill skill-{skill.level}">
  {skill.name}
</div>
