const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

c.clearRect(0, 0, canvas.width, canvas.height);

c.beginPath(); //круг большой
c.arc(250, 250, 150, 0, Math.PI * 2);
c.fillStyle = "#f5d20b";
c.fill();
c.strokeStyle = "#333";
c.lineWidth = 4;
c.stroke();
c.closePath();

c.beginPath(); //левый глаз
c.arc(190, 200, 25, 0, Math.PI * 2);
c.fillStyle = "white";
c.fill();
c.strokeStyle = "#333";
c.lineWidth = 3;
c.stroke();
c.closePath();

c.beginPath(); //правый глаз
c.arc(310, 200, 25, 0, Math.PI * 2);
c.fillStyle = "white";
c.fill();
c.strokeStyle = "#333";
c.lineWidth = 3;
c.stroke();
c.closePath();

c.beginPath(); //зрачок левого глаза
c.arc(190, 200, 12, 0, Math.PI * 2);
c.fillStyle = "#333";
c.fill();
c.closePath();

c.beginPath(); //зрачок правого глаза
c.arc(310, 200, 12, 0, Math.PI * 2);
c.fillStyle = "#333";
c.fill();
c.closePath();

c.beginPath(); //улыбка
c.arc(250, 280, 60, 0.15, Math.PI - 0.15);
c.strokeStyle = "#333";
c.lineWidth = 5;
c.stroke();
c.closePath();

c.beginPath(); //левая бровь
c.moveTo(160, 160);
c.lineTo(220, 155);
c.strokeStyle = "#333";
c.lineWidth = 5;
c.stroke();
c.closePath();

c.beginPath(); //правая бровь
c.moveTo(340, 160);
c.lineTo(280, 155);
c.strokeStyle = "#333";
c.lineWidth = 5;
c.stroke();
c.closePath();

c.beginPath(); //румянец левый
c.arc(150, 270, 30, 0, Math.PI * 2);
c.fillStyle = "rgba(212, 94, 47, 0.3)";
c.fill();
c.closePath();

c.beginPath(); //румянец правый
c.arc(350, 270, 30, 0, Math.PI * 2);
c.fillStyle = "rgba(212, 94, 47, 0.3)";
c.fill();
c.closePath();

c.beginPath(); //нос
c.arc(250, 240, 12, 0, Math.PI * 2);
c.fillStyle = "#ec916d";
c.fill();
c.closePath();