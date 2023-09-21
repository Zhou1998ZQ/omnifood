// code for FAQs page

// autocomplete widget
var headers = document.querySelectorAll('.accordion-header');

$( "#faqs-autocomplete" ).autocomplete({
    source: [ "Do I have to order every week?", "Where do you deliver?", "What if I have allergies?", "What payment options do you take?", "Can I change my plan?", "How do I cancel my subscription?" ]
  });

  import Autocomplete from "https://cdn.jsdelivr.net/gh/lekoala/bootstrap5-autocomplete@master/autocomplete.js";
  const opts = {
    onSelectItem: console.log,
  };
  var src = [];
  for (let i = 0; i < 50; i++) {
    src.push({
      title: "Option " + i,
      id: "opt" + i,
      data: {
        key: i,
      },
    });
  }
  Autocomplete.init("input.autocomplete", {
    items: src,
    valueField: "id",
    labelField: "title",
    highlightTyped: true,
    onSelectItem: console.log,
  });
  document.getElementById("enableButton").addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.getElementById("autocompleteInput");
    const inst = Autocomplete.getInstance(el);
    if (inst.isDisabled()) {
      inst.enable();
    } else {
      inst.disable();
    }
  });
  // We can use regular objects as source and customize label
  new Autocomplete(document.getElementById("autocompleteRegularInput"), {
    items: {
      opt_some: "Some",
      opt_value: "Value",
      opt_here: "Here is a very long element that should be truncated",
      opt_dia: "çaça"
    },
    onRenderItem: (item, label) => {
      return label + " (" + item.value + ")";
    },
  });
  new Autocomplete(document.getElementById("autocompleteDatalist"), opts);
  new Autocomplete(document.getElementById("autocompleteRemote"), opts);
  new Autocomplete(document.getElementById("autocompleteLiveRemote"), opts);