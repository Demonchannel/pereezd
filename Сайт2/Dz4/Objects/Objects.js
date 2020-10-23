function indent_items(obj, array) {
  function recursion(o, r) {
    Object.keys(o).forEach(function (k) {
      if (~array.indexOf(k)) {
        r[id] = r[id] || {};
        r[id][k] = o[k];
        return;
      }
      if (typeof o[k] === "object") {
        r[k] = r[k] || {};
        recursion(o[k], r[k]);
        return;
      }
      r[k] = o[k];
    });
  }

  var result = {},
    id = "d" + ("0" + ++count).slice(-2);

  recursion(obj, result);
  return result;
}

var count = 0,
  s1 = { f01: {}, f02: {}, f03: {}, f04: {}, f05: {} },
  s2 = indent_items(s1, ["f02", "f03", "f04"]),
  s3 = indent_items(s2, ["f03", "f04"]);

document.write("<pre>s1:" + JSON.stringify(s1, 0, 4) + "</pre>");
document.write("<pre>s2:" + JSON.stringify(s2, 0, 4) + "</pre>");
document.write("<pre>s3:" + JSON.stringify(s3, 0, 4) + "</pre>");
