<template>
  <div class='wrapper'>
    <left-bar/>
    <float/>
    <div class="rightContent">
      <div class="topBar">
        <div class="inner">
          <input type="text" placeholder="请输入标题" title="" v-model="newTitle">
          <div class="features">
            <i class="iconfont">&#xec34;</i>
            <el-dropdown trigger="click" @command="setTag">
              <span class="el-dropdown-link" title="选择标签">
                {{init.initTag}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in tagList" :key="index" :command='item'>{{item}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="add" title='新增标签'>
              <i class="iconfont">&#xe648;</i>
              <input type="text" placeholder="新增标签" class="addInput" title="" @blur="addTag" v-model="newTag">
            </div>
            <!-- <i class="iconfont preview" title="预览" @click='getValue'>&#xe647;</i> -->
            <el-dropdown trigger="click" @command="save">
              <span class="el-dropdown-link" title="保存发布">
                {{init.initTxt}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='a'>保存草稿</el-dropdown-item>
                <el-dropdown-item command='b'>发布</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="edit">
          <markdown-editor v-model="content" ref="markdownEditor" :configs="configs"></markdown-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import markdownEditor from "vue-simplemde/src/markdown-editor";
import * as api from "@/api/index";
import LeftBar from "@/components/admin/LeftBar";
import Float from "@/components/admin/Float";
export default {
  components: {
    // markdownEditor,
    LeftBar,
    Float
  },
  data() {
    return {
      content: "",
      newTitle: "",
      newTag: "",
      init: {
        initTag: "默认标签",
        initTxt: "保存发布"
      },
      tagList: ["生活", "nodejs", "vuejs", "React"],
      configs: {
        spellChecker: false, // 禁用拼写检查
        status: false,
        placeholder: "Type here...",
        autoinit: false
      }
    };
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    }
  },
  methods: {
    getValue() {
      // let content = this.simplemde.value();
    },
    setTag(tag) {
      this.init.initTag = tag;
    },
    async save(item) {
      switch (item) {
        case "a":
          let data = {};
          data.title = this.newTitle;
          data.content = this.content;
          data.tags = this.init.initTag;
          let res =  await api.addArticle(data)
          this.$message.success(res.message)
          break;
      }
    },
    async addTag() {
      if (this.newTag) {
        let result = await api.addTag({
          tag: this.newTag,
          author: localStorage.getItem("account") || "imp"
        });
        this.tagList.push(this.newTag);
        this.init.initTag = this.newTag;
        this.newTag = "";
      }
    },
    async getTags() {
      let { data } = await api.getTags();
      let tagList = [];
      data.map(it => {
        tagList.push(it.tag);
      });
      this.tagList = tagList;
    }
  },
  mounted: function() {
    this.getTags();
    // this.simplemde.togglePreview();
    // 'change'事件已经绑定，可以通过@input指定处理器
    // 如果需要，你可以自行绑定这个列表中的其他事件: https://codemirror.net/doc/manual.html#events
    // this.simplemde.codemirror.on('beforeChange', (instance, changeObj) => {
    //   // do some things
    // })
    // 移除SimpleMDE，组件销毁时会自动调用
    // this.simplemde = null
    // // 一些有用的方法
    // this.$refs.markdownEditor.initialize() // init
    // this.simplemde.toTextArea()
    // this.simplemde.isPreviewActive() // returns boolean
    // this.simplemde.isSideBySideActive() // returns boolean
    // this.simplemde.isFullscreenActive() // returns boolean
    // this.simplemde.clearAutosavedValue() // no returned value
    // this.simplemde.markdown(this.content) // returns parsed html
    // this.simplemde.codemirror.refresh() // refresh codemirror
  }
};
</script>
<style lang="less" scoped>
@import "@/assets/style/variable.less";
.wrapper {
  display: flex;
  .rightContent {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 1rem;
    .topBar {
      padding: 0.5rem;
      user-select: none;
      .inner {
        background: @color1;
        height: 2rem;
        padding-left: 1.5rem;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          border: none;
          outline: medium;
          background: transparent;
          height: 2rem;
          line-height: 2rem;
          font-size: 0.8rem;
          width: 12rem;
        }
        .features {
          display: inline-block;
          margin-right: 2rem;
          div {
            display: inline-block;
          }
        }
      }
    }
    .content {
      display: flex;
      padding: 10px;
      .edit {
        display: inline-block;
        flex: 1;
        padding: 0.2rem;
        font-size: 0.3rem;
      }
    }
  }
  .el-dropdown-link {
    margin-left: 0.2rem;
    display: flex;
    width: 3rem;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.5rem;
  }
}
</style>
<style>
/* @import "../../../node_modules/simplemde/dist/simplemde.min.css"; */
/* @import "../../../node_modules/github-markdown-css"; */
</style>
