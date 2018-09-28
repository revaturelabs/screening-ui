import { Pipe, PipeTransform } from '@angular/core';
import { CompleteBatch } from '../../../gambit-client/aggregator/entities/CompleteBatch';

@Pipe({ name: 'DisplayBatchByYear' })
export class DisplayBatchByYear implements PipeTransform {
    transform(item: CompleteBatch[], year: number): CompleteBatch[] {
        const output = item.filter(batch => {
            const selectedDate = new Date(batch.startDate);
            return (Number(selectedDate.getFullYear()) === Number(year));
        });
        return output;
    }
}
