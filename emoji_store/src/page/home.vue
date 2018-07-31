<template>
    <div class="home" 
         :class="[isWeb?'webWrapper':'']"
         :style="{width:fullWidth}">
         <topBar></topBar>
         <!-- <downloading></downloading> -->
        <!-- <emojiList ></emojiList> -->
        <!-- <progress></progress> -->
        <!-- <menubar></menubar> -->
        <!-- <orientation></orientation> -->
        <ball></ball>
        <!-- <banList></banList> -->
        <!-- <lsatSwapList></lsatSwapList> -->
        <!-- <testSrceen></testSrceen> -->
        <!-- <backupBanList></backupBanList> -->
    </div>
</template>
<style scoped>
    .webWrapper{
        height: 100%;
    }
    .tabBar{
        height: 40px;
    }
    .home{
        flex-direction: column;
    }
    .content{
        padding-left: 30px;
        padding-right: 30px;
    }
    .progress{
        margin-top: 50px;
    }
    
</style>
<script>
    import * as util    from '../util'
    import progress     from '../components/progress'
    import emojiList    from '../components/emojiList'
    import orientation  from '../components/orientation'
    import ball         from '../components/ball'
    import banList      from '../components/banList'
    import lsatSwapList from '../components/lastSwapList'
    import testSrceen   from '../components/testScreen'
    import topBar       from '../components/tabBar'
    import menubar      from '../components/menuAnimation'
    import downloading  from '../components/downloading'
    import backupBanList from '../components/backupBanList'
    export default {
            created:function () {

            },
            components: {progress, emojiList, orientation, ball, banList, lsatSwapList, testSrceen, topBar, menubar, downloading,backupBanList},
            data:{
                
            },
            methods:{
                
            },
            computed: {
                isWeb() {
                    return weex.config.env.platform==='Web';
                },
                fullWidth() {//百分比宽度
                    return this.isWeb?'100%':weex.config.viewport+'px';
                },
                
            }


    }
</script>

