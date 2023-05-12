import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as FormData from 'form-data';

@Controller('authors')
export class AuthorsController {
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files[0]) {
      return 'File not exists';
    }

    const form = new FormData();

    form.append('fileUpload', files[0].buffer, files[0].originalname);

    await axios
      .post(
        'https://api-sa-east-1.graphcms.com/v2/cl56nekwk3x4801t3e67e2alx/master/upload',
        form,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTcwMjAyNDAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNTZuZWt3azN4NDgwMXQzZTY3ZTJhbHgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzFlMmMzOGItYWY5OC00YzVhLWEyMjgtNTJmYmIyODI1OTg4IiwianRpIjoiY2w1ODMyZzMxNHdybDAxdW0yeDRlY2p4aiJ9.xp1iO3vp6I6SggFs1PSf7uTXOrBCLTXDcVtusZ5jHLk788ngsWFtQmV0N0jufoMs3GVsEAI-roYwr7QOYIezaWC9MZ_gBXPWfxs-3e7a1d-3jhFR8dB4Wih8vFAXDGleNbeYu6h73KtUC1BuMBkqFjhdjRegl7vRZFv9QFzy9Z8NOXbYMN0Z7EQiXCORLwrIF_DFDIFuSzkSINRn2gLzA9lrCMzYSUchNxbfVe2acDBrTRfZTvydoYRAMuVTIeLiK4tSo0ZCPTcU3LWKwOkHIN-tV1Z0njKurxCgj626R9M1nLqTbpoQp3GEcgiLEfnFbT7JEXq68CizdW7dkQj3JyOp-YJW2BPk1bQHL1spITHeQrKNjjXEqonNSQecZu83RVB-T6ZfE4JA007ffjj4JQf7GWre1Vx04EBHXnqevg_uIcW-rCI5YFqJz4fA7dtoI6jp0mrmtz3rLS9_SzflwdrlBuelExXwKvoI14JhAUrugDsUBO6MLkjkj8zW1GbpGMBwryA4Z0LrJAB2fngNqJPIPkdRGLHbW5tk4YLVVLwkQE1B1dKMhz-eMZpxzgl1ZElaC_audWseWrOX9hcOHjJoPnw9YqnQNfVaLw1vS0MOXSl8oCthSu9Wm_VSbHlFsrS8mNeTwZME5ZpQ9fverZboShMSa1Q4OiMc95y5mAw`,
          },
        },
      )
      .then((data) => console.log({ data: data.data }))
      .catch((err) => console.log({ err: err }));

    return { message: 'Upload realizado com sucesso' };
  }
}
