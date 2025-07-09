import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { projects } from "@/data/tableData";
import { cn } from "@/lib/utils";
export default function TableContent() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-gray-200 hover:bg-transparent">
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Companies
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Members
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Budget
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2 text-center">
            Completion
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow
            key={project.id}
            className="border-b border-gray-100 hover:bg-gray-50"
          >
            <TableCell  className="py-2 px-1">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}
                >
                  {project.icon}
                </div>
                <span className="font-semibold text-gray-900">
                  {project.name}
                </span>
              </div>
            </TableCell>
            <TableCell className="py-2">
              <div className="flex -space-x-3">
                {project.members.map((member, index) => (
                  <Avatar key={index} className="w-6 h-6 border-1 border-white">
                    <AvatarImage
                      alt={member.name}
                      src={member.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback className="text-xs bg-gray-300">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </TableCell>
            <TableCell className="py-2">
              <span className="font-semibold text-gray-500">
                {project.budget}
              </span>
            </TableCell>
            <TableCell className="py-2">
              <div className="items-center gap-3">
                <p className="text-sm font-semibold text-gray-500 min-w-[40px]">
                  {project.completion}%
                </p>
                <div className="flex-1 max-w-[120px]">
                  <Progress
                    className={cn(
                      "h-1",
                      project.completion === 100
                        ? "[&>div]:bg-green-500"
                        : "[&>div]:bg-blue-500",
                    )}
                    value={project.completion}
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}