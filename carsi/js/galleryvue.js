new Vue({
  el: "#app",
  template: "#app-template",

  data() {
    return {
      key: "AIzaSyDorJpnMrA_9NeF-9QxPM80pPesTvANJAQ",
      response: {
        body: {
          files: [400]
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
        let url = "https://www.googleapis.com/drive/v3/files?q='" + this.folderId + "'+in+parents&pageSize=1000&key=" + this.key;
        console.log(url);
      this.$http.get(url).then(
        response => {
          debugger;  
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