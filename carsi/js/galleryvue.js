new Vue({
  el: "#app",
  template: "#app-template",

  data() {
    return {
      key: "AIzaSyDorJpnMrA_9NeF-9QxPM80pPesTvANJAQ",
      response: {
        body: {
          files: []
        }
      },
      folderId: "1pFhM0Ky3lmZwDCJHHKAbWNcZ-RW7cnza"
    }
  },
  mounted: function () {
        window.test=this;
    },
  methods: {
    getResource: function() {
      if(this.folderId.length <= 0 || this.folderId == "") {
        this.response = "Please paste a Google Folder ID!", "bad"
        return;
      }

      let url = "https://www.googleapis.com/drive/v3/files?q='" + this.folderId + "'+in+parents&key=" + this.key;

      this.$http.get(url).then(
        response => {
          console.log(response)
          this.response = response
        })
    },
    
    createDirectLink(file) {
      return `https://lh3.googleusercontent.com/d/${file.id}`
    },
    
    createDirectLinkTh(file) {
      return `https://lh3.googleusercontent.com/d/${file.id}=w240`
    }
    
  }
})

window.test.getResource();