# Quiz-Game
Quiz-game jest aplikacją webową stworzoną do rozgrywki quziowej w rożnych dziedzinach jak i poziomach trudności. Aplikacja została stworzona za pomocą spring + react oraz jest wyhostowania za pomocą azure portal.
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/bf786b02-eb73-4c25-abd5-7393b5edea43)

Użytkownik po kliknięciu w start new game zostaje przeniesiony do menu konfiguracji rozgrywki.
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/d23b16ca-3e1f-478b-a8c9-b12bb3e48e62)
Podczas wprowadzania nazwy użytkownika dochodzi do walidacji danych. Użytkownik nie może pozostawić pola user name pustego, jak również nazwa użytkownika powinna mieć co najmniej 5 znaków.
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/c3cad982-35f4-49c4-8d03-6d94d24d0100)
Następnie wybieramy ilość pytań, dokonujemy wyboru kategorii oraz poziomu trudności
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/9e469f65-83cb-41b2-b633-c6147da53492)
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/417e087b-ea58-45b3-af83-f876611bf71f)
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/08be628c-f5a2-435d-85d6-e74db9bf0699)
Po skonfigurowaniu rozgrywki podczas wciśnięcia przycisku start zostaje wysłane zapytanie do api o zwrot zestawu pytań skonfigurowanych przez użytkownika.

![image](https://github.com/Avivir/Quiz-Game/assets/96440429/cbb47d72-b567-4806-80d9-4692aaaa3471)

Następnie użytkownik zostaje przekierowany do okna rozgrywki gdzie wyświetlane są pytania, odpowiedzi oraz punkty uzyskane podczas rozgrywki
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/9a35d84b-2c53-4f93-b278-273b4bc8058c)
Użytkownik dostaje 10 sekun na udzielenie odpowiedzi. Poprawna odpowiedź jest sygnalizowana kolorem zielonym, błędna odpowiedź kolor czerwony. Każda poprawna odpowieź to +10 punktów do wyniku
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/2d4cbc98-f45e-48a6-a3d7-7a99ef1bf7d2)
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/32631cb1-6b6c-4e7f-b756-60ac1a92cca8)
Po zakończeniu rozgrywki pokazuje się informacja o ilości zdobytych punktów.
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/6c72d1cd-5fee-41f6-910c-b26fb7c318f8)
Po wciśnięciu któregokolwiek z przycisków następuje zapisanie danych do bazy danych sql na Azure portal.
Użytkownik może równierz sprawdzić wyniki pozostałych graczy w zakładce scoreboard
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/b653f66d-bd84-48b5-95e1-50957b6a41bb)
Istnieje również możliwość filtracji po kategoriach aby sprawdzić który użytkownik sdobył najwięcej punktów.
![image](https://github.com/Avivir/Quiz-Game/assets/96440429/8b49e043-f87a-4c69-a1c6-a5a2d6fed9c7)
