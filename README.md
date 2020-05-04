# 2020_6_DG_FixMyCar
Celem aplikacji webowej jest wsparcie warsztatów samochodowych w zakresie efektywnego zarządzania czasem oraz promocji oferowanych usług. Aplikacja umożliwiać powinna właścicielom warsztatów samochodowych na utworzenie 
własnej witryny swojego warsztatu oraz zarządzanie nią. Użytkownicy korzystający z serwisu powinni mieć możliwość przeglądania warsztatów samochodowych, oceniania ich oraz wystawiania komentarzy. Ponadto powinni mieć możliwość rezerwacji dogodnego terminu wizyty w warsztacie oraz uiszczenie opłaty online.   Mechanicy udostępniać będą harmonogram pracy aby klienci mogli się umawiać na wizyty bez konieczności bezpośredniego kontaktu. Po odbytej wstępnej wizycie mechanik po dokonaniu wstępnej diagnostyki prześle klientowi wycenę napraw, którą klient będzie mógł zaakceptować lub odrzucić. Po akceptacji zlecenie otrzyma status „W naprawie” a po jej zakończeniu mechanik zmieni go na „Gotowe do odebrania”. Sam kontakt także będzie umożliwiony - klient będzie mógł bezpośrednio porozmawiać z właścicielem warsztatu.  Warsztaty będą ukazane na mapie.    Wymagania podstawowe:  - możliwość zarejestrowania się (wersja dla mechaników i dla kierowców)- implementacja formularzy i mechanizmów do rejestracji,  - możliwość zalogowania się- implementacja logowania na początku tylko w oparciu o dane z bazy, a ewentualnie później z wykorzystaniem Facebook’ a,  - możliwość edytowania danych o profilu- implementacja sekcji mój profil w                             której będą wyświetlone informacje o profilu i możliwość ich edytowania (    mowa o edytowaniu niektórych danych jak np. hasło) - możliwość zobaczenia wszystkich warsztatów- implementacja wyszukiwania warsztatów,  - możliwość filtrowania wyników wyszukiwania- implementacja filtrowania m.in. po odległości od warsztatu, ocenach, specjalizacji warsztatu, cenniku usług, dostępności w najbliższym okresie,  - możliwość oceniania warsztatów- implementacja możliwości oceniania warsztatów jak i komentowania ich,  - możliwość wprowadzania informacji o swoich pojazdach- implementacja sekcji moje pojazdy, w niej będziemy mogli gromadzić nasze pojazdy, które potem będziemy rejestrować w harmonogramie warsztatów jeśli będziemy chcieli zarezerwować wizytę,  - możliwość zarezerwowania wizyty w warsztacie- na początku będzie to tylko rezerwacja, bez żadnych opłat. Klient będzie mógł wybrać z dostępnych godzin czas, który mu odpowiada i umówić się. Zaimplementowana będzie także możliwość przeniesienia rezerwacji. Każdy warsztat będzie mógł 
określić do kiedy można dokonać zmiany terminu wizyty. Jeśli czas pozwoli to dodamy opłaty za rezerwację, jednak potrzebny jest do tego jakiś serwer płatności. Pozwoli to na uniknięcie sytuacji w której ktoś rezerwował by wizytę i się nie pojawiał,  - możliwość ustalenia harmonogramu i dostępnych wizyt (od strony mechanika)- Implementacja możliwości ustalenia godzin dostępnych dla klientów w których warsztat ma jeszcze wolne miejsca. Warsztat też może tak jakby zajmować miejsca w harmonogramie, gdyż klienci mogą rezerwować wizyty telefonicznie,  Wymagania dodatkowe:  - wyświetlenie warsztatów w okolicy na mapie- implementacja integracji z google maps i zaznaczanie warsztatów na mapie,  - możliwość ustalenia cennika, wykonywanych prac- Implementacja formularzy za pomocą których warsztat będzie mógł dodać usługi i ich ceny,  - możliwość komunikacji między klientem, a warsztatem i składania propozycji do zaakceptowania w sprawie dodatkowych koniecznych napraw- Implementacja komunikacji między klientem, a warsztatem. Warsztat wysyła do akceptacji jakąś dodatkową naprawę, która jest stwierdzona po oględzinach pojazdu. Klient może zaakceptować lub odrzucić. Aby wszystko odbywało się sprawnie aplikacja będzie wysyłała powiadomienie w formie sms- a z linkiem do strony w celu potwierdzenia lub odrzucenia. Klient będzie też mógł zadzwonić do warsztatu i telefonicznie potwierdzić. W takim wypadku warsztat sam potwierdzi za klienta propozycję naprawy, - możliwość logowania i rejestracji za pomocą Google i Facebook- Rozszerzenie możliwości logowania się za pomocą Facebook’ a. - możliwość uiszczenia opłaty online- Implementacja możliwości płatności za rezerwacje wizyty i za usługi. Ma to na celu ograniczenie sytuacji w których ktoś rezygnuje z rezerwacji albo bez powiadamiania nie przyjeżdża. 

*********************************** Etap IX ******************************************

Została dodana sekcja moje pojazdy
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.3.png)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/9.4.png)
