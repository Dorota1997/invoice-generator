# 📦 InvoiceGenerator
Aplikacja do wprowadzania listy towarów oraz generowania podsumowania, stworzona w Angular 19 z wykorzystaniem Angular Material i built-in control flow (@if, @for).

## 🚀 Funkcje
- Dynamiczne dodawanie/usu­wanie pozycji faktury
- Walidacja pól formularza (nazwa, ilość, cena)
- Podsumowanie z listą towarów i łączną kwotą
- Informacje o firmie ładowane z pliku public/company.json symulującego backend
- Routing z zabezpieczeniem, które pokazuje „No items” przy pustych danych

## Uruchomienie
```bash
npm install
ng serve
```
Aplikacja uruchomi się pod adresem: http://localhost:4200