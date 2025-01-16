import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-calendario',
  imports: [],
  templateUrl: './modal-calendario.component.html',
  styleUrl: './modal-calendario.component.scss'
})
export class ModalCalendarioComponent implements OnInit {
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();
  weekDays: string[] = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];
  calendarDays: { date: number; inactive: boolean; selected: boolean }[][] = []; // Aquí definimos que será un arreglo de semanas
  selectedDays: { date: number; month: number; year: number }[] = [];
  lastSelectedDay: { date: number; month: number; year: number } | null = null;

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
  
    // Días del mes anterior
    const daysInPrevMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    let week: { date: number; inactive: boolean; selected: boolean }[] = [];
  
    for (let i = firstDay - 1; i >= 0; i--) {
      week.push({ date: daysInPrevMonth - i, inactive: true, selected: false });
    }
  
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      week.push({ date: i, inactive: false, selected: false });
  
      // Si hemos completado una semana de 7 días, la añadimos
      if (week.length === 7) {
        this.calendarDays.push(week); // Aquí añadimos la semana completa
        week = []; // Reiniciar semana
      }
    }
  
    // Si no se completó una semana, añadimos los días del mes siguiente
    const remainingDays = 7 - week.length;
    for (let i = 1; i <= remainingDays; i++) {
      week.push({ date: i, inactive: true, selected: false });
    }
    if (week.length > 0) {
      this.calendarDays.push(week); // Añadir la última semana incompleta si es necesario
    }
  }

  // Funciones para navegar entre meses y años
  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar();
  }

  prevYear() {
    this.selectedYear--;
    this.generateCalendar();
  }

  nextYear() {
    this.selectedYear++;
    this.generateCalendar();
  }

  toggleDaySelection(day: { date: number; inactive: boolean; selected: boolean }) {
    if (!day.inactive) {
      if (day.selected) {
        // Si el día ya está seleccionado, lo desmarcamos
        day.selected = false;
        this.selectedDays = this.selectedDays.filter(
          (d) => !(d.date === day.date && d.month === this.selectedMonth && d.year === this.selectedYear)
        );
      } else {
        // Si no hay un rango activo, seleccionamos o desmarcamos un rango
        if (this.lastSelectedDay) {
          // Selecciona todos los días entre el rango
          const start = Math.min(this.lastSelectedDay.date, day.date);
          const end = Math.max(this.lastSelectedDay.date, day.date);
  
          for (let i = start; i <= end; i++) {
            const targetDay = this.calendarDays.flat().find((d) => d.date === i && !d.inactive);
            if (targetDay && !targetDay.selected) {
              targetDay.selected = true;
              this.selectedDays.push({
                date: targetDay.date,
                month: this.selectedMonth,
                year: this.selectedYear,
              });
            }
          }
  
          // Reiniciamos el último día seleccionado
          this.lastSelectedDay = null;
        } else {
          // Selección individual del primer día
          day.selected = true;
          this.lastSelectedDay = {
            date: day.date,
            month: this.selectedMonth,
            year: this.selectedYear,
          };
          this.selectedDays.push({
            date: day.date,
            month: this.selectedMonth,
            year: this.selectedYear,
          });
        }
      }
  
      // Mostrar días seleccionados en consola
      console.log(this.selectedDays);
    }
  }
  resetSelection() {
    // Resetear la lista de días seleccionados
    this.selectedDays = [];
  
    // Reiniciar el estado de selección en el calendario
    this.calendarDays.forEach(week => {
      week.forEach(day => {
        day.selected = false;
      });
    });
  
    // También reiniciar lastSelectedDay si es necesario
    this.lastSelectedDay = null;
  }
}
