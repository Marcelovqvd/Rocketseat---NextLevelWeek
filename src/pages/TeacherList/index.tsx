import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este são nossos Proffys">
                <form id="search-teachers">
                <Select 
                    name="week_day" 
                    label="Dia da semana" 
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Ciências', label: 'Ciências'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'História', label: 'História'},
                    ]}    
                />
                <Select 
                    name="subject" 
                    label="Matéria" 
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sábado'},
                    ]}    
                />
                <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;