function parseCount(element) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  if (!isNumeric(element)) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(element);
}

function validateCount(element) {
  try {
    return parseCount(element);
  } catch (error) {
    console.log(error);
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return new Object({
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      }
    });
  }
}















