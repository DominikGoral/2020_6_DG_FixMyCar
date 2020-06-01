# 2020_6_DG_FixMyCar
Celem aplikacji webowej jest wsparcie warsztatów samochodowych w zakresie efektywnego zarządzania czasem oraz promocji oferowanych usług. Aplikacja umożliwiać powinna właścicielom warsztatów samochodowych na utworzenie 
własnej witryny swojego warsztatu oraz zarządzanie nią. Użytkownicy korzystający z serwisu powinni mieć możliwość przeglądania warsztatów samochodowych, oceniania ich oraz wystawiania komentarzy. Ponadto powinni mieć możliwość rezerwacji dogodnego terminu wizyty w warsztacie oraz uiszczenie opłaty online.   Mechanicy udostępniać będą harmonogram pracy aby klienci mogli się umawiać na wizyty bez konieczności bezpośredniego kontaktu. Po odbytej wstępnej wizycie mechanik po dokonaniu wstępnej diagnostyki prześle klientowi wycenę napraw, którą klient będzie mógł zaakceptować lub odrzucić. Po akceptacji zlecenie otrzyma status „W naprawie” a po jej zakończeniu mechanik zmieni go na „Gotowe do odebrania”. Sam kontakt także będzie umożliwiony - klient będzie mógł bezpośrednio porozmawiać z właścicielem warsztatu.  Warsztaty będą ukazane na mapie.    Wymagania podstawowe:  - możliwość zarejestrowania się (wersja dla mechaników i dla kierowców)- implementacja formularzy i mechanizmów do rejestracji,  - możliwość zalogowania się- implementacja logowania na początku tylko w oparciu o dane z bazy, a ewentualnie później z wykorzystaniem Facebook’ a,  - możliwość edytowania danych o profilu- implementacja sekcji mój profil w                             której będą wyświetlone informacje o profilu i możliwość ich edytowania (    mowa o edytowaniu niektórych danych jak np. hasło) - możliwość zobaczenia wszystkich warsztatów- implementacja wyszukiwania warsztatów,  - możliwość filtrowania wyników wyszukiwania- implementacja filtrowania m.in. po odległości od warsztatu, ocenach, specjalizacji warsztatu, cenniku usług, dostępności w najbliższym okresie,  - możliwość oceniania warsztatów- implementacja możliwości oceniania warsztatów jak i komentowania ich,  - możliwość wprowadzania informacji o swoich pojazdach- implementacja sekcji moje pojazdy, w niej będziemy mogli gromadzić nasze pojazdy, które potem będziemy rejestrować w harmonogramie warsztatów jeśli będziemy chcieli zarezerwować wizytę,  - możliwość zarezerwowania wizyty w warsztacie- na początku będzie to tylko rezerwacja, bez żadnych opłat. Klient będzie mógł wybrać z dostępnych godzin czas, który mu odpowiada i umówić się. Zaimplementowana będzie także możliwość przeniesienia rezerwacji. Każdy warsztat będzie mógł 
określić do kiedy można dokonać zmiany terminu wizyty. Jeśli czas pozwoli to dodamy opłaty za rezerwację, jednak potrzebny jest do tego jakiś serwer płatności. Pozwoli to na uniknięcie sytuacji w której ktoś rezerwował by wizytę i się nie pojawiał,  - możliwość ustalenia harmonogramu i dostępnych wizyt (od strony mechanika)- Implementacja możliwości ustalenia godzin dostępnych dla klientów w których warsztat ma jeszcze wolne miejsca. Warsztat też może tak jakby zajmować miejsca w harmonogramie, gdyż klienci mogą rezerwować wizyty telefonicznie,  Wymagania dodatkowe:  - wyświetlenie warsztatów w okolicy na mapie- implementacja integracji z google maps i zaznaczanie warsztatów na mapie,  - możliwość ustalenia cennika, wykonywanych prac- Implementacja formularzy za pomocą których warsztat będzie mógł dodać usługi i ich ceny,  - możliwość komunikacji między klientem, a warsztatem i składania propozycji do zaakceptowania w sprawie dodatkowych koniecznych napraw- Implementacja komunikacji między klientem, a warsztatem. Warsztat wysyła do akceptacji jakąś dodatkową naprawę, która jest stwierdzona po oględzinach pojazdu. Klient może zaakceptować lub odrzucić. Aby wszystko odbywało się sprawnie aplikacja będzie wysyłała powiadomienie w formie sms- a z linkiem do strony w celu potwierdzenia lub odrzucenia. Klient będzie też mógł zadzwonić do warsztatu i telefonicznie potwierdzić. W takim wypadku warsztat sam potwierdzi za klienta propozycję naprawy, - możliwość logowania i rejestracji za pomocą Google i Facebook- Rozszerzenie możliwości logowania się za pomocą Facebook’ a. - możliwość uiszczenia opłaty online- Implementacja możliwości płatności za rezerwacje wizyty i za usługi. Ma to na celu ograniczenie sytuacji w których ktoś rezygnuje z rezerwacji albo bez powiadamiania nie przyjeżdża. 

*********************************** Etap IX ******************************************

Została dodana sekcja moje pojazdy
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.3.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.4.png)
Możemy dodać samochód, formularz wyświetla się po kliknieciu w "Dodaj pojazd"
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.5.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.6.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.7.png)
Controllers and routes
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.8.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.9.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.10.png)
React return in Vehicles files
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.11.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.12.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.13.png)

*********************************** Etap X ******************************************

Po zalogowaniu pracownik może przejść do sekcji Warsztaty
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/10_po_zalogowaniu.png)
Mamy ukazany dashboard, w którym może poruszać się mechanik.
Podczas przełączania między opcjami, które mamy po lewej stronie, zostały dodane efekty przejść.
Wszystko odbywa się z wykorzystaniem react-spring.
Po kliknięciu w znak + obok napisu ,, Dodaj warsztat" jest wysuwany formularz w którym mechanik może dodać warsztat.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/10_formularz.png)
Po dodaniu warsztatu
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/10_po_dodaniu.png)

*********************************** Etap XI ******************************************

Możliwość przeglądania wizyt
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/11_dashboard.png)
Po zalogowaniu i przejściu do sekcji Warsztaty użytkownik może wybrać Wizyty
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/11_datepicker.png)
Pokazywane są wówczas wizyty które ma zaplanowane zalogowany mechanik na dzień dzisiejszy, może on wybierać inne dni.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/11_wizyty.png)
Po wybraniu nowej daty jest wysyłane zapytanie do bazy z inną datą.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/11_wizyty_2.png)
Każda wizyta w zależności od danych w bazie jest przedstawiana w ten sposób, mamy wyświetloną godzinę i podstawowe informacje o wizycie.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/11_wizyty_szczegolowy.png)
Po kliknięciu w wizytę są wyświetlane pozostałe informacje, takie jak: imię i nazwisko klienta, kwota do zapłaty, metoda płatności czy usługi do wykonania, które klient chciał mieć w tej wizycie.

*********************************** Etap XII ******************************************
W tym etapie miałem umożliwić klientom możliwość przeglądania wolnych miejsc na wizyte w warsztacie.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/12.1.png)
Tak jak widać na powyższym obrazku mamy do dyspozycji miejsce na którym widzimy zajęte godziny. Mamy pasek informujący od której do której warsztat jest otwarty. W tym przypadku jest to godzina 8-20. 
 ![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/12.2.png)
Na powyższym obrazku widać, że warsztat jest zajęty 17.05.2020 w godzinach 8-16 i 17:00-17:45 ( a więc wolny czas jest między tymi godzinami albo po godzinie 17:45)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/12.4.png)
Po naciśnięciu przycisku + wyświetla nam się formularz, który musimy wypełnić, gdy chcemy zarezerwować wizytę. Musimy wybrać pojazd z naszych dostępnych pojazdów, musimy podać date wizyty, przewidywany jej koniec i możemy umieścić opis, co chcemy dokonać podczas tej wizyty.
Spośród dostępnych serwisów możemy wybrać ten który nas interesuje.
Po dodaniu mamy nowy element w harmonogramie.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/12.3.png)

*********************************** Etap XIII ******************************************
W tym etapie miałem zaimplementować możliwość dodawania komentarzy i ocen do warsztatów.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.1.png)
Na samym dole znajdują się komentarze. Ocena jest przedstawiona za pomocą gwiazdek.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.2.png)
Ocene można wybrać od 1 do 5.
Można modyfikować komentarze, aczkolwiek edytować można tylko swoje komentarze. Na powyższych zrzutach ekranu widać, że mamy przyciski po prawej stronie udostępnione z wykorzystaniem ikon.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.3.png)
Po kliknięciu w ikonę edycji zmienia nam się kolor inputu i możemy wpisać do niego inną wartość.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.4.png)
Po ponownym kliknięciu w ikonke edycji zmiana zostaje zapisana w bazie danych. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.5.png)
Po kliknięciu na ikonkę w zależności od tego z jakiego stanu na jaki zmieniamy, wysyłamy update requesta do api.
Przycisk do usuwania także jest dostępny tylko dla autora komentarza. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.6.png)
Ikonki po najechaniu na nie zmieniają kolor na biały.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/13.7.png)
Po usunięciu komentarz znika z listy komentarzy.

