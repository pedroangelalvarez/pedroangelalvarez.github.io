import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from '../../../models';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    showToast = false;
    toastMessage = '';

    // Información de contacto - puedes modificar estos valores
    email = 'pedroangel.alvarez24@gmail.com';
    linkedInUrl = 'https://linkedin.com/in/pedroangelalvarezcarhuajulca';
    githubUrl = 'https://github.com/pedroangelalvarez';
    locations = [
        'Trujillo, PE (Disponible para trabajo remoto)',
        'Lima, PE (Disponible para trabajo híbrido)'
    ];

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', [Validators.required, Validators.minLength(5)]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    get nameError(): string {
        const control = this.contactForm.get('name');
        if (control?.errors?.['required'] && control.touched) {
            return 'El nombre es requerido.';
        }
        if (control?.errors?.['minlength'] && control.touched) {
            return 'El nombre debe tener al menos 2 caracteres.';
        }
        return '';
    }

    get emailError(): string {
        const control = this.contactForm.get('email');
        if (control?.errors?.['required'] && control.touched) {
            return 'El correo electrónico es requerido.';
        }
        if (control?.errors?.['email'] && control.touched) {
            return 'Dirección de correo electrónico no válida.';
        }
        return '';
    }

    get subjectError(): string {
        const control = this.contactForm.get('subject');
        if (control?.errors?.['required'] && control.touched) {
            return 'El asunto es requerido.';
        }
        if (control?.errors?.['minlength'] && control.touched) {
            return 'El asunto debe tener al menos 5 caracteres.';
        }
        return '';
    }

    get messageError(): string {
        const control = this.contactForm.get('message');
        if (control?.errors?.['required'] && control.touched) {
            return 'El mensaje es requerido.';
        }
        if (control?.errors?.['minlength'] && control.touched) {
            return 'El mensaje debe tener al menos 10 caracteres.';
        }
        return '';
    }

    async onSubmit(): Promise<void> {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;

        try {
            // Simular llamada a API
            await new Promise(resolve => setTimeout(resolve, 1000));

            const formData: ContactForm = this.contactForm.value;
            console.log('Formulario enviado:', formData);

            // Mostrar toast de éxito
            this.showSuccessToast('¡Mensaje Enviado! Gracias por contactarme, Pedro te responderá pronto.');

            // Resetear formulario
            this.contactForm.reset();
        } catch (error) {
            console.error('Error al enviar:', error);
            this.showSuccessToast('Error al enviar el mensaje. Por favor intenta de nuevo.');
        } finally {
            this.isSubmitting = false;
        }
    }

    private showSuccessToast(message: string): void {
        this.toastMessage = message;
        this.showToast = true;
        setTimeout(() => {
            this.showToast = false;
        }, 5000);
    }

    trackByIndex(index: number): number {
        return index;
    }
}
