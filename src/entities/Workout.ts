import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "date" })
  date!: Date

  @Column({ type: "int" })
  meters!: number

  @Column({ type: "int", nullable: true })
  fatigueLevel?: number // 1 to 5

  @Column({ type: "int" })
  timeInSeconds!: number

  @Column({ type: "varchar", nullable: true })
  style?: string
}
