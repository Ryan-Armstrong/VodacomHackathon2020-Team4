const app = getApp();

Component({
  props: {
    optionData: [],
  },
  data: {
    currentIndex: 0,
    statusBarHeight: 0,
    added: [],
  },
  methods: {
    onItemTap(e) {
      let selectedItem = this.props.optionData[this.data.currentIndex];
      let idData = e.currentTarget.id;
      let next = idData.next;
      let nextStep = this.props.optionData[next];
      if (nextStep.end) {
        this.goToDetails(nextStep);
      } else {
        let optionSelected = {
          item: idData,
          parent: selectedItem
        }
        let added = this.data.added;
        added.push(optionSelected);
        this.setData({
          currentIndex: next,
          added: added
        })
      }

    },
    onEditClicked(e) {
      let idData = e.currentTarget.id;
      let data = idData.data;
      let index = idData.index;
      let array = this.data.added;
      if (index === 0) {
        array = [];
      } else {
        array.splice((index, array.length - 1))
      }
      this.setData({
        currentIndex: data.parent.index,
        added: array
      })
    },
    goBack: () => {
      wx.navigateBack({ delta: 1 });
    },

    goToDetails: (item) => {
      app.selectedOption = item;
      my.navigateTo({
        url: '../details-page/details-page',
      });
    },
  },
  didMount() {
    this.setData({
      added: []
    })
  }
});