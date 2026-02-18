class DataArrayBuilder {
  static ArrayBuilder(data) {
    const arr = data.split("\n");

    const rows = [];

    arr.forEach((row) => {
      const a = row.split(",");
      rows.push(a);
    });

    return rows;
  }
}

export default DataArrayBuilder;
