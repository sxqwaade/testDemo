module.exports = function (grunt) {
     // 配置
     grunt.initConfig({
         pkg : grunt.file.readJSON( 'package.json' ),
         concat : {
             domop : {
                 src: [ 'src/scripts.js'],
                 dest: 'dest/liulishuo-domo.js'
             }
         },
         uglify : {
             options : {
                 banner : '/*! <%= pkg.name %> <%= grunt.template.today("2015-3-3") %> */\n'
             },
             build : {
                 src : 'dest/liulishuo-domo.js' ,
                 dest : 'dest/liulishuo-domo.min.js'
             }
         }
     });
     // 载入concat和uglify插件，分别对于合并和压缩
     grunt.loadNpmTasks( 'grunt-contrib-concat' );
     grunt.loadNpmTasks( 'grunt-contrib-uglify' );
     // 注册任务
     grunt.registerTask( 'default' , [ 'concat' , 'uglify' ]);
};